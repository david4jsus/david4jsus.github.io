// Gloabl variables
var image_index; // Index of the current image being viewed

// Change the content of the text at the sides of the image viewer based on a specified index
function change_sides_text (index) {

   // Text on the left side of the viewer
   var left_text = document.getElementsByClassName ("left_text")[0];
   
   // Text on the right side of the viewer
   var right_text = document.getElementsByClassName ("right_text")[0];
   
   // Change content of the texts based on the index of the tab
   switch (index) {
      default:
      case 0: // Churches
         left_text.innerHTML = "<h3>Churches</h3><p>BEA has 14 churches in different locations where local Christians can gather for teaching, praise and worship.</p>";
         right_text.innerHTML = "";
         break;
      case 1: // Bible College
         left_text.innerHTML = "<h3>The Derek Hanway Bible College</h3><p>We train local people through our bible school and prepare them to share the message of hope.</p>";
         right_text.innerHTML = "";
         break;
      case 2: // Missionary
         left_text.innerHTML = "<h3>Missionary</h3><p>Our gospel workers are dedicated to serve and share the message of the hopeless and show them the light of Jesus Christ.</p>";
         right_text.innerHTML = "";
         break;
      case 3: // In USA
         left_text.innerHTML = "<p style='font-size: 1.2em; text-align: center;'>All Nations Pastors, Missionaries and Christian Friends Mission Event.</p>";
         right_text.innerHTML = "<p style='font-size: 0.98em; text-align: center;'>Your prayers and support helped us to materialize the All Nations Pastors, Missionaries, Christian Friends mission event on June 22, 2008 in Fontana, California. We had 30 local pastors who participated in this meeting. There were about 360 people who attended the mission dinner event.</p>";
         right_text.style.padding = "0px 10px 0px 0px";
         break;
      case 4: // Child Educations
         left_text.innerHTML = "<h3>Child Education</h3><p>We have 13 elementary schools which are providing free Christian education to many poor village children.</p>";
         right_text.innerHTML = "";
         break;
      case 5: // Blind & Deaf
         left_text.innerHTML = "<h3>Blind &amp; Deaf</h3><p>The blind and deaf are the most misfortunate people in a country like Bangladesh. BEA teaches them sign language and braille.</p>";
         right_text.innerHTML = "";
         break;
      case 6: // Self-Help Program
         left_text.innerHTML = "<h3>Bakery Shop Training Program</h3><p>The bakery shop is now complete. Producing fresh bread fo villagers and helping families to earn their living through work and training.</p>";
         right_text.innerHTML = "";
         break;
      case 7: // Nurse's-Aide
         left_text.innerHTML = "<h3>Nurse's-Aide Training School</h3><p>BEA trains local villagers as &quot;Little Mother Theresas&quot; to both serve the poor and helpless and to gain employment.</p>";
         right_text.innerHTML = "";
         break;
      case 8: // Health Care
         left_text.innerHTML = "<h3>Health Care</h3><p>BEA provides free health clinics to the poor and conducts hygiene and health awareness seminars.</p>";
         right_text.innerHTML = "";
         break;
      case 9: // Relief & Development
         left_text.innerHTML = "<h3>Relief &amp; Development</h3><p>BEA always provides relief at the time of natural disaster. Also, many development projects are in the works to help the people in the worst situations.</p>";
         right_text.innerHTML = "";
         break;
   }
}

// Load corresponding image previews at the bottom of the image viewer based on tab index
function change_image_previews (index) {
   
   // Container for the image previews
   var container = document.getElementsByClassName ("previews")[0];
   
   // Container for the mobile image previews
   var mobile_container = document.getElementsByClassName ("mobile_image_previews")[0];
      
   // Number of images per tab
   var images = 0;
   switch (index) {
      default:
      case 0: // Churches
         images = 3;
         break;
      case 1: // Bible College
         images = 2;
         break;
      case 2: // Missionary
         images = 5;
         break;
      case 3: // In USA
         images = 5;
         break;
      case 4: // Child Education
         images = 3;
         break;
      case 5: // Blind & Deaf
         images = 1;
         break;
      case 6: // Self-Help Program
         images = 6;
         break;
      case 7: // Nurse's-Aide
         images = 4;
         break;
      case 8: // Health Care
         images = 3;
         break;
      case 9: // Relief & Development
         images = 5;
         break;
   }
   
   // Load image previews
   container.innerHTML = "";
   for (var i = 0; i < images; i++) {
      container.innerHTML += "<img src='images/ministry/" + (index * 10 + i) + ".jpg' onclick='change_image(" + (index * 10 + i) + ")' alt='Ministry' />";
      
      // Add space between elements
      if (i < images - 1) {
         container.innerHTML += "&nbsp;&nbsp;";
      }
   }
   mobile_container.innerHTML = container.innerHTML;
}

// Select an image to display in the image viewer based on an image ID
function change_image (id) {
   
   // Image viewer
   var container = document.getElementsByClassName ("image")[0];
   var mobile_container = document.getElementsByClassName ("mobile_image_viewer")[0];
   
   // Image
   container.children[0].src = mobile_container.children[0].src = "images/ministry/" + id + ".jpg";
   
   // Caption
   var caption = container.children[1];
   var mobile_caption = mobile_container.children[1];
   
   // Reset css padding-top property, set in some cases
   document.getElementsByClassName ("left_text")[0].style.paddingTop = "";
   
   // Image indicator on mobile
   var indicator = document.getElementsByClassName ("mobile_image_indicator")[0];
   
   // Change image and caption based on image ID
   switch (id) {
      default:
      case 0:
         caption.innerHTML = "Fellowship and praise";
         indicator.innerHTML = "1/3";
         break;
      case 1:
         caption.innerHTML = "One of our outreach campaigns";
         indicator.innerHTML = "2/3";
         break;
      case 2:
         caption.innerHTML = "One of our Bible study groups";
         indicator.innerHTML = "3/3";
         break;
      case 10:
         caption.innerHTML = "New batch of Bible college students";
         indicator.innerHTML = "1/2";
         break;
      case 11:
         caption.innerHTML = "Students in their classroom";
         indicator.innerHTML = "2/2";
         break;
      case 20:
         caption.innerHTML = "One of our gospel workers sharing the Word of God";
         indicator.innerHTML = "1/5";
         break;
      case 21:
         caption.innerHTML = "Bengali Bibles were given to the potential candidates";
         indicator.innerHTML = "2/5";
         break;
      case 22:
         caption.innerHTML = "A baptism in a village pond";
         indicator.innerHTML = "3/5";
         break;
      case 23:
         caption.innerHTML = "Mr. Robert W. Bariagee sharing the gospel message in a village church";
         indicator.innerHTML = "4/5";
         break;
      case 24:
         caption.innerHTML = "Dr. John N. Biswas (4th from the right) and Mr. Roger Lippross (in middle) with gospel workers at a village gathering";
         indicator.innerHTML = "5/5";
         break;
      case 30:
         caption.innerHTML = "Mr. Roger Lippross in All Nations Pastors, Missionaries &amp; Christian Friends Dinner";
         indicator.innerHTML = "1/5";
         break;
      case 31:
         caption.innerHTML = "Dr. John &amp; Naomi Biswas speaking to the audience";
         indicator.innerHTML = "2/5";
         break;
      case 32:
         caption.innerHTML = "Pastors, missionaries and friends attended to attend the dinner event";
         indicator.innerHTML = "3/5";
         break;
      case 33:
         caption.innerHTML = "The keynote speaker of the event Pr. Danny Carroll (Water of Life Community Church)";
         indicator.innerHTML = "4/5";
         break;
      case 34:
         caption.innerHTML = "Bengali praise team";
         indicator.innerHTML = "5/5";
         break;
      case 40:
         caption.innerHTML = "Students from one of our 13 village elementary schools";
         indicator.innerHTML = "1/3";
         break;
      case 41:
         caption.innerHTML = "BEA also assists high school students by offering free materials to them";
         indicator.innerHTML = "2/3";
         break;
      case 42:
         caption.innerHTML = "Special gifts for poor school Children";
         indicator.innerHTML = "3/3";
         break;
      case 50:
         caption.innerHTML = "A group of blind and deaf students with their teachers in BEA's village school";
         indicator.innerHTML = "1/1";
         break;
      case 60:
         caption.innerHTML = "John N. Biswas visited the bakery and workers";
         document.getElementsByClassName ("left_text")[0].innerHTML = "<h3>Bakery Shop Training Program</h3><p>The bakery shop is now complete. Producing fresh bread fo villagers and helping families to earn their living through work and training.</p>";
         document.getElementsByClassName ("right_text")[0].innerHTML = "";
         indicator.innerHTML = "1/6";
         break;
      case 61:
         caption.innerHTML = "This widow now teaches others how to raise goats";
         document.getElementsByClassName ("left_text")[0].innerHTML = "<h3>Goat Self-Help Program</h3><p>Goats often produce twins and thrive in any condition - eating grass and vegetable waste. Goats can give as much as four quarts of milk a day. Goat milk is high in protein needed by small children and malnourished people.</p>";
         document.getElementsByClassName ("right_text")[0].innerHTML = "<img src='images/ministry/missmanjubala.jpg' style='width: 100px;' alt='Miss Manju Bala' /><p style='text-align: center;'>Miss Manju Bala, the Self-Help Program co-ordinator, regularly visits goat recipients in the field, and discusses how to take care of the goats and become self-sufficient.</p>";
         document.getElementsByClassName ("left_text")[0].style.paddingTop = "0px";
         indicator.innerHTML = "2/6";
         break;
      case 62:
         caption.innerHTML = "A poor handicapped villager with his new treasure: a white goat";
         document.getElementsByClassName ("left_text")[0].innerHTML = "<h3>Goat Self-Help Program</h3><p>Goats often produce twins and thrive in any condition - eating grass and vegetable waste. Goats can give as much as four quarts of milk a day. Goat milk is high in protein needed by small children and malnourished people.</p>";
         document.getElementsByClassName ("right_text")[0].innerHTML = "<img src='images/ministry/missmanjubala.jpg' style='width: 100px;' alt='Miss Manju Bala' /><p style='text-align: center;'>Miss Manju Bala, the Self-Help Program co-ordinator, regularly visits goat recipients in the field, and discusses how to take care of the goats and become self-sufficient.</p>";
         document.getElementsByClassName ("left_text")[0].style.paddingTop = "0px";
         indicator.innerHTML = "3/6";
         break;
      case 63:
         caption.innerHTML = "Recepients of goats";
         document.getElementsByClassName ("left_text")[0].innerHTML = "<h3>Goat Self-Help Program</h3><p>Goats often produce twins and thrive in any condition - eating grass and vegetable waste. Goats can give as much as four quarts of milk a day. Goat milk is high in protein needed by small children and malnourished people.</p>";
         document.getElementsByClassName ("right_text")[0].innerHTML = "<img src='images/ministry/missmanjubala.jpg' style='width: 100px;' alt='Miss Manju Bala' /><p style='text-align: center;'>Miss Manju Bala, the Self-Help Program co-ordinator, regularly visits goat recipients in the field, and discusses how to take care of the goats and become self-sufficient.</p>";
         document.getElementsByClassName ("left_text")[0].style.paddingTop = "0px";
         indicator.innerHTML = "4/6";
         break;
      case 64:
         caption.innerHTML = "Now they have their own rickshaws...";
         document.getElementsByClassName ("left_text")[0].innerHTML = "<h3>Rickshaw Ownership Program</h3><p>Hard-working poor rickshaw pullers are given the chance to have their own rickshaw.</p>";
         document.getElementsByClassName ("right_text")[0].innerHTML = "";
         indicator.innerHTML = "5/6";
         break;
      case 65:
         caption.innerHTML = "... and bicycles!";
         document.getElementsByClassName ("left_text")[0].innerHTML = "<h3>Rickshaw Ownership Program</h3><p>Hard-working poor rickshaw pullers are given the chance to have their own rickshaw.</p>";
         document.getElementsByClassName ("right_text")[0].innerHTML = "";
         indicator.innerHTML = "6/6";
         break;
      case 70:
         caption.innerHTML = "Students acquiring practical training";
         indicator.innerHTML = "1/4";
         break;
      case 71:
         caption.innerHTML = "Graduation day at BEA nurse's-aide training school";
         indicator.innerHTML = "2/4";
         break;
      case 72:
         caption.innerHTML = "Nurse's-aide students in classroom";
         indicator.innerHTML = "3/4";
         break;
      case 73:
         caption.innerHTML = "New batch of Nurse's-aide students";
         indicator.innerHTML = "4/4";
         break;
      case 80:
         caption.innerHTML = "Dr. Happy Baidya &amp; Dr. Prasanto Roy examine patients at BEA clinics";
         indicator.innerHTML = "1/3";
         break;
      case 81:
         caption.innerHTML = "Dr. Irene Kimble visited our BEA mission center and provided health care to poor villagers";
         indicator.innerHTML = "2/3";
         break;
      case 82:
         caption.innerHTML = "Patients are waiting to see the doctors";
         indicator.innerHTML = "3/3";
         break;
      case 90:
         caption.innerHTML = "Free meals for the victims and blankets are given to victim families";
         indicator.innerHTML = "1/5";
         break;
      case 91:
         caption.innerHTML = "Herman L. Hoeh Disaster Relief and Community Center";
         indicator.innerHTML = "2/5";
         break;
      case 92:
         caption.innerHTML = "Our native gospel worker, Mr. Ratan, is giving cash support to a Cidir victim";
         indicator.innerHTML = "3/5";
         break;
      case 93:
         caption.innerHTML = "Cyclone victim's house is being repaired";
         indicator.innerHTML = "4/5";
         break;
      case 94:
         caption.innerHTML = "Multi-purpose Development Center";
         indicator.innerHTML = "5/5";
         break;
   }
   
   // Change the description text on mobile for all cases where the text on the sides is changed
   document.getElementsByClassName ("mobile_descriptions")[0].innerHTML = document.getElementsByClassName ("left_text")[0].innerHTML + document.getElementsByClassName ("right_text")[0].innerHTML;
   
   // Update mobile caption
   mobile_caption.innerHTML = caption.innerHTML;
   
   // Change style of mobile image previews to indicate selected image
   mobile_previews_container = document.getElementsByClassName ("mobile_image_previews")[0];
   for (var i = 0; i < mobile_previews_container.children.length; i++) {
      if (mobile_previews_container.children[i].getAttribute ("src") == "images/ministry/" + id + ".jpg") {
         mobile_previews_container.children[i].style = "border: 1px solid red;";
      } else {
         mobile_previews_container.children[i].style = "border: 1px solid #000000;";
      }
   }
   
   // Set global variable to current index
   image_index = id;
}

// Load the previous image in the viewer
function load_previous_image() {
   
   // Decrease the current image index
   image_index--;
   
   // Put index back in possible range
   if (image_index < 0) {
      image_index = 2;
   } else if (image_index > 2 && image_index < 10) {
      image_index = 11;
   } else if (image_index > 11 && image_index < 20) {
      image_index = 24;
   } else if (image_index > 24 && image_index < 30) {
      image_index = 34;
   } else if (image_index > 34 && image_index < 40) {
      image_index = 42;
   } else if (image_index > 42 && image_index < 50) {
      image_index = 50;
   } else if (image_index > 50 && image_index < 60) {
      image_index = 65;
   } else if (image_index > 65 && image_index < 70) {
      image_index = 73;
   } else if (image_index > 73 && image_index < 80) {
      image_index = 82;
   } else if (image_index > 82 && image_index < 90) {
      image_index = 94;
   }   
   // Load new current image
   change_image (image_index);
}

// Load the next image in the viewer
function load_next_image() {
   
   // Increase the current image index
   image_index++;
   
   // Put index back in possible range
   if (image_index > 2 && image_index < 10) {
      image_index = 0;
   } else if (image_index > 11 && image_index < 20) {
      image_index = 10;
   } else if (image_index > 24 && image_index < 30) {
      image_index = 20;
   } else if (image_index > 34 && image_index < 40) {
      image_index = 30;
   } else if (image_index > 42 && image_index < 50) {
      image_index = 40;
   } else if (image_index > 50 && image_index < 60) {
      image_index = 50;
   } else if (image_index > 65 && image_index < 70) {
      image_index = 60;
   } else if (image_index > 73 && image_index < 80) {
      image_index = 70;
   } else if (image_index > 82 && image_index < 90) {
      image_index = 80;
   } else if (image_index > 94) {
      image_index = 90;
   }
   
   // Load new current image
   change_image (image_index);
}

// Change the content of the image viewer based on which tab is selected
function change_tab (index) {
   
   // If the parameter is not set, the function was called from the mobile layout
   // If the parameter is set, set the index of the mobile layout to the corresponding tab
   if (index === undefined) {
      index = document.getElementsByClassName ("mobile_tab_select")[0].children[0].selectedIndex;
   } else {
      document.getElementsByClassName ("mobile_tab_select")[0].children[0].selectedIndex = index;
   }

   // Change the text at the sides of the image viewer (or descriptions on mobile)
   change_sides_text (index);
   
   // Load corresponding image previews at the bottom of the image viewer
   change_image_previews (index);
   
   // Select an image to view on the image viewer
   change_image (index * 10);
}
