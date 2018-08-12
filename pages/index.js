export default () =>
    <div className="container">
        <div className="sidebar">test</div>
        <div className="content">
            <img className="photo" src="/static/sample.jpg"></img>
            <h3>Streetwear Brand</h3>
            <p>This is a test. This is a test. Thanks for using PayPal. You can now ship any items. To see all the transaction details, log in to your PayPal account. It may take a few moments for this transaction to appear in your account</p>
        </div>
        <style jsx>{`
            .container {
                padding: 30px;
            }

            .content {
                margin: auto;
                width: 400px;
                height: 400px;
            }

            .photo {
                display: block;
                margin-left: auto;
                margin-right: auto;
                width: 300px;
                height: auto;
            }

            .sidebar {
                float: left;
                width: 200px;
                height: 500px;
                text-align: left;
                box-sizing: border-box;
                padding: 20px;
                font-size: 20px;
            }
        `}</style>
    </div>

