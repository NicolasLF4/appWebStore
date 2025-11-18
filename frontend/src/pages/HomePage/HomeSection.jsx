import React from "react";

export const HomeSection = () => {
    return (
        <div>
            <section>
                <nav>
                    <h2>Usuarios</h2>
                    <button>Create</button>
                    <button>Read</button>
                    <button>Update</button>
                    <button>Delete</button>
                </nav>
            </section>

            <section>
                <nav style={{ marginTop: 50 }}>
                    <h2>Productos</h2>
                    <button>Create</button>
                    <button>Read</button>
                    <button>Update</button>
                    <button>Delete</button>
                </nav>
            </section>
        </div>
    )
}