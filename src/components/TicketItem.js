import React from "react";

export default function TicketItem({ ticket, dispatch }) {

    const { id, title, description, priority } = ticket;

    const priorityClass = {
        1: "priority-low",
        2: "priority-medium",
        3: "priority-high",
    };

}   