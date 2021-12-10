import React from "react";

function Footer(props) {
  const {
    socialMedia
  } = props;
  
  return (
    <footer>
      <div className="social-media-div">
        <h2>Keep in touch:</h2>
        <ul>
          {socialMedia.map(item => {
              return (
                <li>
                    <a target="_blank" href={item.href} rel="noreferrer" key={item.name.toLowerCase()}>
                        <img title={item.name} className="logos" id={item.name.toLowerCase()} src={require(`../../assets/images/${item.src}`).default } alt={item.name} />
                    </a>
                </li>
              )
            })
          }
        </ul>
      </div>
      <h3 data-testid="copyright" className="text-tertiary">&copy; Maki A. Maki, 2021</h3>
    </footer>
  )
}

export default Footer
