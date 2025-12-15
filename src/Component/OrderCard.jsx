import React from "react";

export default function OrderCard(props) {

    return (
        <div onDragStart={props.drageFind} draggable={true} style={styles.card}>
            {/* Image placeholder */}
            <div style={styles.imageBox}>
                <img style={styles.image} src={props.image} alt="image not load"/>
            </div>

            {/* Food name */}
            <div style={styles.textBox}>
                <h3 style={styles.title}>{props.foodName}</h3>
            </div>

            {/* Remove button */}
            <button style={styles.button} onClick={props.clickHandler} disabled={props.disableProperty}>
                {props.nameOfBtn}
            </button>
        </div>
    );
}

const styles = {
    card: {
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "16px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        maxWidth: "500px",
        backgroundColor: "#fff",
    },
    imageBox: {
        width: "80px",
        height: "80px",
        border: "2px dashed #ccc",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#999",
        fontSize: "14px",
        flexShrink: 0,
    },
    textBox: {
        flex: 1,
    },
    title: {
        margin: 0,
        fontSize: "18px",
        fontWeight: "600",
    },
    selectedDrag:{
        scale:0.2,
        border:"3px dashed #fff",
    },
    button: {
        padding: "8px 14px",
        backgroundColor: "#e53935",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
    },
};
