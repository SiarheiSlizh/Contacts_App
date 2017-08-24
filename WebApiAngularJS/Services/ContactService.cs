using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApiAngularJS.Models;

namespace WebApiAngularJS.Services
{
    public class ContactService
    {
        private static List<Contact> contacts;
        private static Queue<int> freeIndexes;

        static ContactService()
        {
            contacts = new List<Contact>();
            contacts.Add(new Contact() { Id = 1, Name = "Sasha", DateOfBirth = "04/12/1990", PhoneNumber = "25-6402204", Gender = "male", Relationship = "Work", Description = "", IsFavourite = true });
            contacts.Add(new Contact() { Id = 2, Name = "Elena", DateOfBirth = "07/04/1989", PhoneNumber = "29-4534536", Gender = "female", Relationship = "Home", Description = "", IsFavourite = false });
            contacts.Add(new Contact() { Id = 3, Name = "Yaroslav", DateOfBirth = "14/01/1902", PhoneNumber = "29-6445354", Gender = "male", Relationship = "Other", Description = "", IsFavourite = false });
            contacts.Add(new Contact() { Id = 4, Name = "John", DateOfBirth = "25/11/1989", PhoneNumber = "25-6334204", Gender = "male", Relationship = "Home", Description = "", IsFavourite = true });
            freeIndexes = new Queue<int>();
        }

        public IQueryable<Contact> GetAll()
        {
            return contacts.AsQueryable();
        }

        public IQueryable<Contact> GetFavourites()
        {
            return contacts.Where(c => c.IsFavourite == true).AsQueryable();
        }

        public Contact GetById(int id)
        {
            return contacts.FirstOrDefault(c => c.Id == id);
        }

        public void Add(Contact contact)
        {
            if (freeIndexes.Count != 0)
                contact.Id = freeIndexes.Dequeue();
            else
                contact.Id = contacts.Count + 1;

            contacts.Add(contact);
        }

        public void Update(int id, Contact contact)
        {
            var index =  contacts.FindIndex(c => c.Id == id);
            contacts[index] = contact;
        }

        public void Remove(int id)
        {
            contacts.RemoveAll(c => c.Id == id);
            freeIndexes.Enqueue(id);
        }
    }
}