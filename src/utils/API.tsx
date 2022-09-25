import axios from "axios";
import qs from "qs";

export async function getAuthorization() {
   const res = await axios({
      method: "POST",
      url: `https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token`,
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify({
         grant_type: process.env.REACT_APP_GRANT_TYPE!,
         client_id: process.env.REACT_APP_CLIENT_ID!,
         client_secret: process.env.REACT_APP_CLIENT_SECRET!,
      }),
   });
   return res.data;
}
