export default () =>
    <div>
        <img className="photo" src='/static/sample.jpg'></img>    
        <div className='sidebar'>test</div>
            <style jsx>{`
                .photo {
                    width: 300px;
                    height: 300px;
                }

                .sidebar {
                    float: left;
                    background: #111;
                    width: 200px;
                    height: 500px;
                    text-align: left;
                    box-sizing: border-box;
                    padding: 20px;
                    font-family: Monaco;
                    font-size: 20px;
                    color: #fff;
                }
            `}</style>
    </div>

