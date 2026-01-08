// Admin Access Control for CV
// প্রেস করুন 'L' কী-বোর্ড থেকে এডমিন মোড এক্টিভেট করতে
window.addEventListener('keydown', function(e) {
    // Check if 'L' is pressed
    if (e.key === 'l' || e.key === 'L') {
        const password = prompt("Admin Authentication Required. Enter Password:");
        
        // আপনার দেয়া ইউজারনেম/পাসওয়ার্ড লজিক
        if (password === "zahid074") {
            const cvBtn = document.getElementById("adminCV");
            cvBtn.style.display = "inline-block";
            alert("Success! Admin mode activated. You can now download the professional CV.");
        } else {
            alert("Access Denied: Incorrect Password.");
        }
    }
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});