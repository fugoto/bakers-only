# bakers-only
Bakers Only is an online image repository where bakers can share and show off their newest baking creations to each other, and get inspiration from each others' creations.

Deployed at https://bakers-only.herokuapp.com/ 

To run in development environment:
Create database "bakers-only"
seed: 'npm run seed'
start app: 'npm run start-dev'

To login under existing (fake) user, log in with user email and password 'test'. Password is hashed in backend database.
On Home tab, filter by selecting one or more checkboxes above, or by clicking a username on a photo to see all photos submitted by that user.

Technologies used: JavaScript, React/Redux, PostGreSQL, Cloudinary, MaterialUI, CSS, bcrypt.