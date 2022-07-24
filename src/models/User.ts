import  {Schema, Model, model, connection} from 'mongoose';

type UserType = {
  email:string,
  age: number,
  interesting: string[],
  name: {
    first_name: string,
    last_name: string
  }
}

const schema = new Schema<UserType>({
  email: {type: String, required: true},
  age: { type: Number, required: true },
  interesting: [String],
  name: {
    first_name: {type: String, required: true},
    last_name: String
  }
})

const modelName:string = 'User';

export default (connection && connection.models[modelName]) ? 
  connection.models[modelName]as Model<UserType> :
  model<UserType>(modelName,schema)
  ;