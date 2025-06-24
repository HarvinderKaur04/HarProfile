import Avatar from '@mui/material/Avatar';
function Footer() {
    return (<>
        <div className="wrapper-footer">
            <div className="copy-Right">
                <p>Copyrights © 2025</p>
            </div>
            <div className="Contact">
                <p> Contact : <span><a href="https://www.linkedin.com/in/harvinder-kaur-7b441b325/"> Harvinder Kaur Zitzer</a> </span></p>
            </div>

            <div className="footerIcon">

                <a href="#">
                    <Avatar
                        sx={{
                            width: 56,
                            height: 56,
                            bgcolor:'#d50000',
                            color: '#dac5c3',
                            boxShadow: '0 0 10px 4px rgba(213, 0, 0, 0.7)',
                            border: '3px solid #d50000',
                            transition: 'all 0.3s ease-in-out',
                            cursor: 'pointer',
                            '&:hover': {
                            
                            border: '3px solid #d50000',

                            }
                        }}
                    >
                        <i className="fa-solid fa-caret-up"></i></Avatar></a>
            </div>
        </div>


    </>);
}

export default Footer;