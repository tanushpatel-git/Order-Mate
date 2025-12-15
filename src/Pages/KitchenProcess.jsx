import React, {useEffect, useState} from "react";
import OrderCard from "../Component/OrderCard.jsx";
import {toast,ToastContainer} from "react-toastify";

export default function KitchenProcess() {
    const dotDesign = "scale-110 border-2 border-white border-dotted";
    const [orderItems, setOrderItems] = useState([]);
    const [progressItems, setProgressItems] = useState([]);
    const [doneItems, setDoneItems] = useState([]);
    const [selected, setSelected] = useState(false);
    const [selected2, setSelected2] = useState(false);
    let progressData = JSON.parse(localStorage.getItem('progressData')) || [];
    let orderData = JSON.parse(localStorage.getItem("orderData")) || [];
    let doneData = JSON.parse(localStorage.getItem("doneData")) || [];
    const [dragItem, setDragItem] = useState(null);
    const handleDrag = () => {
        setSelected(true)
    }
    const handleDragLeave = () => {
        setSelected(false);
    }
    const handleDrag2 = () => {
        setSelected2(true)
    }
    const handleDragLeave2 = () => {
        setSelected2(false);
    }
    const handleDrop = (e) => {
        e.preventDefault();
        setSelected2(false);

        if (!dragItem || dragItem.from === "progress") return;

        const updatedProgress = [...progressItems, dragItem.item];
        const updatedOrder = orderItems.filter((_, i) => i !== dragItem.idx);

        setProgressItems(updatedProgress);
        setOrderItems(updatedOrder);

        localStorage.setItem("progressData", JSON.stringify(updatedProgress));
        localStorage.setItem("orderData", JSON.stringify(updatedOrder));
    };

    const handleDropOfOrder = (e) => {
        e.preventDefault();
        setSelected(false);

        if (!dragItem || dragItem.from === "order") return;

        const updatedOrder = [...orderItems, dragItem.item];
        const updatedProgress = progressItems.filter((_, i) => i !== dragItem.idx);

        setOrderItems(updatedOrder);
        setProgressItems(updatedProgress);

        localStorage.setItem("orderData", JSON.stringify(updatedOrder));
        localStorage.setItem("progressData", JSON.stringify(updatedProgress));
    };

    const removeHandlerForProgress = (idx) => {
        const updatedOrder = progressItems.filter((ele, id) => id !== idx);
        setProgressItems(updatedOrder);
        localStorage.setItem('progressData', JSON.stringify(updatedOrder));
    }
    const progressFindItems = (item, idx) => {
        setDragItem({ item, idx, from: "order" });
    };

    const orderFindItems = (item, idx) => {
        setDragItem({ item, idx, from: "progress" });
    };

    const valueShow = () => {
        setOrderItems(orderData);
    }
    const valueShowProgress = () => {
        setProgressItems(progressData);
    }
    const removeHandler = (idx) => {
        const updatedOrder = orderItems.filter((ele, id) => id !== idx)
        setOrderItems(updatedOrder);
        localStorage.setItem("orderData", JSON.stringify(updatedOrder));
    }
    const setItemInDone = (item, idx) => {
        doneData.push(item);
        localStorage.setItem('doneData', JSON.stringify(doneData));
        removeHandlerForProgress(idx)
        setDoneItems(doneData);
        setTimeout(() => {
            localStorage.removeItem('doneData');
            setDoneItems([]);
            toast.success("Order is done.");
        }, 5000);
    }
    useEffect(() => {
        valueShow()
        valueShowProgress()
    }, []);
    useEffect(() => {
        localStorage.setItem('doneData', JSON.stringify(doneData));
    }, [doneItems])


    return (<div className="min-h-screen absolute top-0 w-full  bg-black p-6 overflow-x-hidden">
        <div className="absolute top-[14vh] w-full flex justify-center flex-col  ">
            <h1 className="text-6xl font-bold mb-6 text-white text-center">Kitchen Board</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Order Column */}
                <div className={`bg-gray-400 rounded-2xl min-h-[80vh] shadow p-4 ${selected ? dotDesign : ""}`}
                     onDragOver={(e) => e.preventDefault()}
                     onDrop={handleDropOfOrder}
                     onDragEnter={handleDrag}
                     onDragLeave={handleDragLeave}>
                    <h2 className="text-xl font-semibold mb-4 text-center">Order({orderItems.length})</h2>
                    <div className="text-gray-500 text-sm text-center flex flex-col gap-2 justify-center">
                        {orderItems.length === 0 ? "No items" : orderItems.map((item, idx) => (<div key={idx}>
                            <OrderCard
                                foodName={item.name}
                                image={item.img}
                                clickHandler={() => {
                                    removeHandler(idx)
                                }}
                                nameOfBtn={"Remove"}
                                drageFind={() => {
                                    progressFindItems(item, idx)
                                }}/>
                        </div>))}
                    </div>
                </div>

                {/* In Progress Column */}
                <div className={`bg-gray-400 rounded-2xl min-h-[80vh] shadow p-4 ${selected2 ? dotDesign : ""}`}
                     onDragOver={(e) => e.preventDefault()}
                     onDrop={handleDrop}
                     onDragEnter={handleDrag2}
                     onDragLeave={handleDragLeave2}>
                    <h2 className="text-xl font-semibold mb-4 text-center">In Progress({progressItems.length})</h2>
                    <div className="text-gray-500 text-sm text-center flex flex-col gap-2 justify-center">
                        {progressItems.length === 0 ? "No items" : progressItems.map((item, idx) => (<div key={idx}>
                            <OrderCard
                                foodName={item.name}
                                image={item.img}
                                drageFind={() => {
                                    orderFindItems(item, idx)
                                }}
                                nameOfBtn={"Order Done"}
                                clickHandler={() => {
                                    setItemInDone(item, idx)
                                }}
                            />
                        </div>))}
                    </div>
                </div>

                {/* Done Column */}
                <div className={`bg-gray-400 rounded-2xl min-h-[80vh] shadow p-4`}
                >
                    <h2 className="text-xl font-semibold mb-4 text-center">Done: {doneItems.length}</h2>
                    <div className="text-gray-500 text-sm text-center flex flex-col gap-2 justify-center">
                        {doneItems.length === 0 ? "No items" : doneItems.map((item, idx) => (<div key={idx}>
                            <OrderCard
                                foodName={item.name}
                                image={item.img}
                            />
                        </div>))}
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer/>
    </div>);
}
