import React from "react";
import styles from "../styles/ProductUpload.module.css"

export const ProductUpload = () => {
    return (
            <div className={ styles.uploader }>
                {/* titulo */}
                <div class={ styles.title }>  
                    <p>titulo</p>
                    <input />
                </div>
                {/* price */}
                <div class={ styles.price }> 
                    <p>precio</p>
                    <input />
                </div>
                {/* desc */}
                <div class={ styles.desc }>  
                    <p>descripcion</p>
                    <input />
                </div>
                {/* talles */}
                <div class={ styles.size }>  
                    <p>talle</p>
                    <select name="size" id="">
                        <option value="hola">S</option>
                        <option value="hola">M</option>
                        <option value="hola">L</option>
                        <option value="hola">XL</option>
                        <option value="hola">XXL</option>
                    </select>
                    </div>
                {/* colores */}
                <div class={ styles.colors }> 
                    <p>colores</p>
                    <select name="colors" id="">
                        <option value="hola">azul</option>
                        <option value="hola">blanco</option>
                        <option value="hola">rojo</option>
                    </select>
                    </div>
                {/* cantidad */}
                <div class={ styles.qty }>  
                    <p>cantidad</p>
                    <input />
                </div>
                {/* img */}
                <div class={ styles.img }>  <p>imagen</p></div>
                {/* botones de carga de imagen */}
                <div class={ styles["img-buttons"] }>  
                    <p>botones de la imagen</p>
                    <div className={ styles.buttons }>
                        <button>Subir Imágen</button>
                        <button>Eliminar Imágen</button>
                    </div>
                </div>
                {/* category */}
                <div class={ styles.category }> 
                    <p>categoria</p> 
                    <select name="category" id="">
                        <option value="hola">zapatillas</option>
                        <option value="hola">pantalones</option>
                        <option value="hola">remeras</option>
                        <option value="hola">abrigos</option>
                    </select>
                    </div>
                {/* lista de stage */}
                <div class={ styles.list }>  <p>lista</p></div>
                {/* botones del stage */}
                <div class={ styles["list-buttons"] }> <p>botones de lista</p> </div>
            </div>
    )
}

export default ProductUpload;