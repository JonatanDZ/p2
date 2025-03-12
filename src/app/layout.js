import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import { save_shop, save_user } from "./actions.js";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />

        <main style={{ flex: "1" }}>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
/*<form action={save_user}>
          <label htmlFor="email_id">Email</label>
          <input id="email_id" type="text" name="email"></input>
          <label htmlFor="password_id">Password</label>
          <input id="password_id" type="password" name="password"></input>
          <label htmlFor="owner_id">Are you a shop owner?</label>
          <input id="owner_id" type="checkbox" name="owner"></input>
          <button>submit</button>
        </form>

        <form action={save_shop}>
          <label htmlFor="shopname_id">Shop Name</label>
          <input id="shopname_id" type="text" name="shopname"></input>
          <label htmlFor="location_id">Location</label>
          <select name="location" id="location_id">
            <option value="aalborg">Aalborg</option>
            <option value="københavn">København</option>
            <option value="aarhus">Aarhus</option>
          </select>
          <label htmlFor="user_id">What's your user ID</label>
          <input id="user_id" type="number" name="user_id"></input>
          <button>submit</button>
        </form> */
