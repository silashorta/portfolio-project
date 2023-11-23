import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const port = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota para enviar e-mail
app.get('/', (req, res) => {
  res.send('Bem-vindo à minha aplicação Node.js com Express e Nodemailer!');
});

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'silas.horta@gmail.com',
        pass: 'hriblounpzfracej',
      },
    });

    // Configurações do e-mail
    const mailOptions = {
      from: `${email}`,
      to: 'silas.horta@gmail.com',
      subject: `Mensagem porfolio - ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
    };

    // Envia o e-mail
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
    res.status(500).json({ success: false, message: 'Erro interno ao processar a solicitação.', error: error.message });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
