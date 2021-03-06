import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row" id="about-header">
          <h1>Acerca De</h1>
          <div className="col-sm-4" id="gallery-img">
            <img src="assets/images/donor.jpg" />
            <img src="assets/images/poorpup.jpg" />
          </div>
          <div id="about-text" className="col-sm-8">
            <p>
              Todos los días, mascotas como los suyos necesitan transfusiones de
              sangre. Para muchos procedimientos, una transfusión es necesaria,
              y sin donantes de sangre animal, los veterinarios no pueden
              realizar las operaciones que pueden salvar la vida de ese miembro
              amado de su familia u otros animales en necesidad. Colitas para la
              Vida es un proyecto de Colitas Sonrientes, Inc. Es un registro de
              posibles donantes de sangre animal en Puerto Rico. Si usted y su
              mascota desean formar parte del registro, comunica con su
              veterinario.
            </p>

            <p>
              <strong>Twitter:</strong>
              @ColitasSonrient
            </p>
            <p>
              <strong>Facebook:</strong>
              <a href="https://www.facebook.com/colitassonrientesinc/">
                www.facebook.com/colitassonrientesinc/
              </a>
            </p>
            <p>
              <strong>Email:</strong>
              <a href="mailto:colitassonrientes@yahoo.com">
                colitassonrientes@yahoo.com
              </a>
            </p>

            <p>
              <strong>Webpage:</strong>
              <a href="http://wwww.colitassonrientes.com">
                wwww.colitassonrientes.com
              </a>
            </p>
            <p>
              <strong>Página para donativos:</strong>
              <a href="http://www.colitassonrientes.com/donativos">
                www.colitassonrientes.com/donativos
              </a>
            </p>
            <p>
              <strong>Paypal:</strong>
              unlapizamicorazon@yahoo.com
            </p>
            <p>
              <strong>Banco Popular:</strong>
              121-55186-5
            </p>
            <p>
              <strong>ATH Móvil:</strong>
              787-298-7669
            </p>
            <p>
              <strong>Donativos por Correo:</strong>
              P.O. Box 7576 Ponce, PR 00732-7576
            </p>
            <p>
              <strong>Donativos por Teléfono:</strong> 787-298-7669
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
