import {cleanEnv, str, num} from 'envalid';
import {config} from "dotenv";
config();
const env = cleanEnv(process.env,{
    PORT:num(),
    DATABASE_URL:str(),
    PULSE_API_KEY:str(),
    TOKEN_JWT_SECRET:str()
})
export default env;