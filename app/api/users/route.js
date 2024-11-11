import connectionToDatabase from "@/lib/mongoose";
import User from "@/app/models/users";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, contact, reason } = req.body;
  
      // Here you can add logic to save data to a database
      // For example, connect to a database and store the form data
      // or perform any other server-side processing needed
  
      console.log("Visitor entry data:", { name, contact, reason });
  
      // Send a response back to the client
      return res.status(200).json({ message: 'Entry recorded successfully' });
    } else {
      // Method not allowed
      res.setHeader('Allow', ['POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  