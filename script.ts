const form = document.getElementById('Resume-Form') as HTMLFormElement;
const   ResumeDisplayElement = document.getElementById('Resume Display') as HTMLDivElement;

//handle form submission
 form.addEventListener('submit',( event: Event)=>{
event.preventDefault();

//collect input value

const name =(document.getElementById ('name')as HTMLInputElement).value
const email =(document.getElementById ('email')as HTMLInputElement).value
const phone =(document.getElementById ('phone')as HTMLInputElement).value
const education =(document.getElementById ('education')as HTMLInputElement).value
const experience =(document.getElementById ('experience')as HTMLInputElement).value
const skills =(document.getElementById ('skills')as HTMLInputElement).value

//generate the resume

const resumeHTML =`
<h2><b>Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b>${name}</p>
<p><b>Name:</b>${email}</p>
<p><b>Name:</b>${phone}</p>

<h3>Education</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>
`;

// display the resume generated

if(ResumeDisplayElement){
    ResumeDisplayElement.innerHTML = resumeHTML;
}else{
    console.error('the resume display element  is missing')
}
 });