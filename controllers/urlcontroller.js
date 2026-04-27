const {nanoid} = require("nanoid");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const {getuser} = require('../service/authentication'); 
async function handlegeneratenewshorturl(req, res) {
    const desc = req.body;
    if(!desc.Url) {return res.status(400).json({error:'Url is required'});}
    const token=req.cookies.uid;
    const user=getuser(token);
    const shortid = nanoid(8);
    const response = await prisma.url.create({
        data:{
            shortid: shortid,
            redirecturl: desc.Url,
            userId:user.id,
        } 
});
 const allUrls = await prisma.url.findMany({
    where: { userId: user.id },
        include:{
            _count:{
                select:{visithistory:true}
            }
        }
    });
return res.render('home',{
  id:shortid,
  urls: allUrls
});


}
async function handleurl(req,res){
    const shortid = req.params.shortid;
  
  const entry = await prisma.url.findUnique({
    where: { shortid: shortid }
  });

  if (!entry) return res.status(404).json({ error: 'URL not found' });

  await prisma.visit.create({
    data: {
      timestamp: BigInt(Date.now()),
      urlId: entry.id
    }
  });

  return res.redirect(entry.redirecturl);
}
async function handlegetallurls(req, res) {
  const urls = await prisma.url.findMany({
    include:{
        _count:{
            select:{visithistory:true}
        }
    }
  });
  return res.json(urls);
}
async function handleGetAnalytics(req,res){
    const shortid=req.params.shortid;
    const result=await prisma.url.findUnique({
        where:{shortid:shortid},
        include:{
            visithistory:true,
            _count:{
                select:{visithistory:true}
            }
        }
    });
    return res.json({totalClicks:result._count.visithistory,
        analytics:result.visithistory.map(visit => ({
      ...visit,
      timestamp: Number(visit.timestamp)
    })),
    })
}
async function handleDelete(req,res){
  const shortid=req.params.shortid;
  await prisma.visit.deleteMany({
    where:{urlId:(await prisma.url.findUnique({
      where:{shortid}})).id}
    
  });
  await prisma.url.delete({
    where:{shortid:shortid}
  });
  return res.redirect('/');
}

module.exports = {handlegeneratenewshorturl,handleurl,handlegetallurls,handleGetAnalytics,handleDelete} 