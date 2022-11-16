function Footer() {
    return <footer className="page-footer #ce93d8 purple lighten-3">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Copyright Text
                <a className="grey-text text-lighten-4 right" href="#">REP</a>
            </div>
        </div>
    </footer>
}

export {Footer}