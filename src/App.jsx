import { useState } from "react";
import "./App.css";

const gifList = [
  "altar_todos_santos.gif",
  "bruja.gif",
  "calabaza.gif",
  "central_de_abastos.gif",
  "corazon.gif",
  "dia_de_muertos.gif",
  "diablin.gif",
  "feliz_navidad.gif",
  "feliz_navidad_2.gif",
  "feria.gif",
  "feria_1.gif",
  "feria_1_ultrahd.gif",
  "feria_2.gif",
  "feria_2_ultrahd.gif",
  "halloween.gif",
  "halloween_02.gif",
  "halloween_03.gif",
  "halloween_04.gif",
  "halloween_full.gif",
  "imss.gif",
  "imss_2.gif",
  "navidad.gif",
  "negro64x16.gif",
  "negro80x20.gif",
  "negro128x32.gif",
  "pacman_2.gif",
  "por_que_me_gustas_wey.gif",
  "por_que_me_gustas_wey_64_x_32.gif",
  "predator_01.gif",
  "predator_02.gif",
  "publi8020.gif",
  "san_juditas.gif",
  "sonic.gif",
  "spider_joyboy.gif",
  "viva_mexico.gif",
  "viva_mexico_2.gif",
  "viva_mexico_3.gif",
  "viva_mexico_4.gif",
  "viva_mexico_5.gif",
  "viva_mexico_6.gif",
  "viva_mexico_5_ultra.gif",
];

const formatearNombre = (nombre) => {
  return nombre
    .replace(/\.gif$/i, "")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
};

const GifGallery = () => {
  const [copiadoIndex, setCopiadoIndex] = useState(null);

  // ✅ BASE_URL absoluto correcto para tu sitio GitHub Pages
  const BASE_URL = "https://ingeabraham23.github.io/gifs/gifs/";

  const copiarLink = async (gifUrl, index) => {
    try {
      await navigator.clipboard.writeText(gifUrl);
      setCopiadoIndex(index);
      setTimeout(() => setCopiadoIndex(null), 1500);
    } catch (error) {
      console.error("Error al copiar:", error);
      alert("No se pudo copiar el enlace 😞");
    }
  };

  return (
    <div className="galeria-container">
      <div className="galeria-grid">
        {gifList.map((gif, index) => {
          const gifUrl = `${BASE_URL}${gif}`;

          return (
            <div key={index} className="gif-card">
              <img
                src={gifUrl}
                alt={`GIF ${index}`}
                className="gif-imagen"
              />
              <p className="gif-nombre">{formatearNombre(gif)}</p>

              <div className="botones-acciones">
                <a href={gifUrl} download className="boton-descargar">
                  Descargar
                </a>
                <button
                  type="button"
                  onClick={() => copiarLink(gifUrl, index)}
                  className="boton-copiar"
                >
                  {copiadoIndex === index ? "¡Copiado!" : "Copiar enlace"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>LETRERO NORMAL</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: '#27C5F5', fontSize: "20px", padding: '10px' }}>
            <td>512</td>
            <td>128</td>
          </tr>
          <tr style={{ backgroundColor: 'red', fontSize: "20px" }}>
            <td>256</td>
            <td>64</td>
          </tr>
          <tr style={{ backgroundColor: 'red', fontSize: "20px" }}>
            <td>128</td>
            <td>32</td>
          </tr>
          <tr style={{ backgroundColor: '#27C5F5', fontSize: "20px" }}>
            <td>64</td>
            <td>16</td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th colSpan={2}>LETRERO HD</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: '#27C5F5', fontSize: "20px", padding: '10px' }}>
            <td>640</td>
            <td>160</td>
          </tr>
          <tr style={{ backgroundColor: 'red', fontSize: "20px" }}>
            <td>320</td>
            <td>80</td>
          </tr>
          <tr style={{ backgroundColor: 'red', fontSize: "20px" }}>
            <td>160</td>
            <td>40</td>
          </tr>
          <tr style={{ backgroundColor: '#27C5F5', fontSize: "20px" }}>
            <td>80</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>LETRERO ULTRAHD</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: '#27C5F5', fontSize: "20px", padding: '10px' }}>
            <td>1024</td>
            <td>256</td>
          </tr>
          <tr style={{ backgroundColor: 'red', fontSize: "20px" }}>
            <td>512</td>
            <td>128</td>
          </tr>
          <tr style={{ backgroundColor: 'red', fontSize: "20px" }}>
            <td>256</td>
            <td>64</td>
          </tr>
          <tr style={{ backgroundColor: '#27C5F5', fontSize: "20px" }}>
            <td>128</td>
            <td>32</td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th colSpan={2}>LETRERO CUADRADO</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: '#27C5F5', fontSize: "20px", padding: '10px' }}>
            <td>512</td>
            <td>256</td>
          </tr>
          <tr style={{ backgroundColor: 'red', fontSize: "20px" }}>
            <td>256</td>
            <td>128</td>
          </tr>
          <tr style={{ backgroundColor: 'red', fontSize: "20px" }}>
            <td>128</td>
            <td>64</td>
          </tr>
          <tr style={{ backgroundColor: '#27C5F5', fontSize: "20px" }}>
            <td>64</td>
            <td>32</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GifGallery;
