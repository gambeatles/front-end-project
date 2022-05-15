import mongoose from 'mongoose';

// Esquema de usuario de la base de datos
const usuarioSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    apellido: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    token: {
      type: String,
    },
    confirmado: {
      type: Boolean,
      default: false,
    },
    rol: {
      type: String,
      enum: ['admin', 'usuario'],
      default: 'usuario',
    },
    imagen: {
      type: String,
      default:
        'https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg',
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    }
  },
  {
    timestamps: true,
  }
);

// Exportamos el esquema
const Usuario = mongoose.model('Usuario', usuarioSchema);
export default Usuario;
