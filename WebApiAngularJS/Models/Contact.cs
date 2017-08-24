using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiAngularJS.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string DateOfBirth { get; set; }
        public string PhoneNumber { get; set; }
        public string Gender { get; set; }
        public string Relationship { get; set; }
        public string Description { get; set; }
        public bool IsFavourite { get; set; }
    }
}