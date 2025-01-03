import "@/styles/globals.css"
import Nav from "@/components/Nav"
import Provider from "@/components/Provider"

export const metadata = {
    title: "Mr Prompt",
    description: "Discover and Share Clean AI Prompts"
}

const RootLayout = ({ children }) => {
    return (
        <Provider>
            <html lang="en">
                <body>
                    <div className="main">
                        <div className="gradient"></div>
                    </div>
                    <main className="app">
                        <Nav />
                        {children}
                    </main>
                </body>
            </html>
        </Provider>
    )
}

export default RootLayout