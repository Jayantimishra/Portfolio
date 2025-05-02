var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname) {
            
                        for (let tablink of tablinks) {
                tablink.classList.remove("active-link");
            }
            for (let tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
                tabcontent.style.display = "none"; 
            }
            document.querySelector(`.tab-links[onclick*='${tabname}']`).classList.add("active-link");
            const activeContent = document.getElementById(tabname);
            activeContent.classList.add("active-tab");
            activeContent.style.display = "block"; 
        }
        opentab('skills');