const express =  require('express');
const app = express();
const prisma = require('@prisma/client').PrismaClient;
const port = 3000;

//Middleware para interpretar JSON
app.use(express.json());

//Endpoints REST
app.get('/posts', async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
});

app.post('/posts', async (req, res) => {
  const {title, content, metaDescription, summary, keyword} = req.body;
  const post = await prisma.post.create({
    data: {
      title, 
      content, 
      metaDescription, 
      summary, 
      keyword
    },
  });
  res.json(post);
});

app.listen(port, () => {
  console.log('API REST rodando em http://localhost:${port}');
});