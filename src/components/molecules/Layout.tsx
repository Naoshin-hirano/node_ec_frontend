import * as React from "react";

function Layout({ children }: any) {
    return (
        <div>
            <main>{children}</main>
        </div>
    );
}

export default Layout;
