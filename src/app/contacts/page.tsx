import Link from "next/link";
import { contacts } from "../../data/contacts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ContactsPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Contacts List</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {contacts.map((contact) => (
                        <TableRow key={contact.id} className="cursor-pointer hover:bg-muted">
                            <TableCell>
                                <Link href={`/contacts/${contact.id}`}>{contact.name}</Link>
                            </TableCell>
                            <TableCell>{contact.email}</TableCell>
                            <TableCell>{contact.phone}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}