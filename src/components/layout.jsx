import MyFluid from "../anim/myfluid"
import Head from "./header/header";

const Layout = ({ children }) => {
    return (
        <div style={{ height: "100vh" }} >
          <MyFluid />
          <div style={{ position: "absolute",top: 0,left: 0,right: 0,bottom: 0,display: "flex",flexDirection: "column",justifyContent: 'center',alignItems: 'center', color: "#FFF", pointerEvents: "none" }}>
            <Head />
            {children}
          </div>
        </div>
    )
}

export default Layout;