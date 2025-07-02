"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { contacts as contactsdata } from "../../../data/contacts";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "@/components/ui/sonner";

export default function ContactDetail() {
    const params = useParams();
    const contactId = params.id;

    const contact = contactsdata.find((c) => c.id === contactId);

    type ContactForm = {
        name: string;
        email: string;
        phone: string;
        address: string;
        dob: string;
    }

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        dob: ""
    });

    useEffect(() => {
        if (!contact) return;

        const saved = localStorage.getItem(`contact_${contactId}`);
        if (saved) {
            const parsed = JSON.parse(saved);
            setFormData({
                ...parsed, dob: parsed.dob ? new Date(parsed.dob).toISOString().split("T")[0] : "",
            });
        } else {
            setFormData({
                name: contact.name,
                email: contact.email,
                phone: contact.phone,
                address: contact.address,
                dob: contact.dob,
            });
        }
    }, [contactId, contact]);

    if (!contact) return <div className="p-6">Contact not found</div>;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name as keyof ContactForm]: value, }));
    };

    const handleSave = () => {
        localStorage.setItem(`contact_${contactId}`, JSON.stringify(formData));
        toast.success("Contact saved!");
    };

    return (
        <div className="p-6 max-w-md mx-auto space-y-4">
            <Toaster />
            <h1 className="text-2xl font-bold mb-4">Contact Detail</h1>
            <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
            />
            <Input
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
            />
            <Input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
            />
            <Button onClick={handleSave}>Save</Button>
        </div>
    );
}