import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
<script type="text/javascript">
      async function main(){
        let pyodide = await loadPyodide();
        console.log(pyodide.runPython("1 + 2"));
      }
      main();
    </script>
      <div className="min-h-screen">
          {
             // <Alert preview={preview} />
          }
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
