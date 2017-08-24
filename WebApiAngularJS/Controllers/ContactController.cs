using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiAngularJS.Models;
using WebApiAngularJS.Services;

namespace WebApiAngularJS.Controllers
{
    public class ContactController : ApiController
    {
        private readonly ContactService contactService = new ContactService();
        
        // GET: api/Contact
        public IQueryable<Contact> Get()
        {
            return contactService.GetAll();
        }

        [Route("api/Contact/favourites")]
        public IQueryable<Contact> GetFavourites()
        {
            return contactService.GetFavourites();
        }

        // GET: api/Contact/5
        public Contact Get(int id)
        {
            return contactService.GetById(id);
        }

        // POST: api/Contact
        public void Post(Contact contact)
        {
            contactService.Add(contact);
        }

        // PUT: api/Contact/5
        public void Put(int id, Contact contact)
        {
            contactService.Update(id, contact);
        }

        // DELETE: api/Contact/5
        public void Delete(int id)
        {
            contactService.Remove(id);
        }
    }
}
