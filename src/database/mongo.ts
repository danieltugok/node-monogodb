import {connect} from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const mongoConnection = async () => {
  try {
    console.log('conectando ao mundoDB...')
    await connect(process.env.MONGO_URL as string);
    console.log("mongo conectado com sucesso na porta 2000!");
    
  } catch (error) {
    console.log(error);
    
  }
}