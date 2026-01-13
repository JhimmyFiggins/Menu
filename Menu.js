//Content Loaded
        document.addEventListener("DOMContentLoaded", function(event) {
            hideFood();
        });

        //Selected Food
        let image_SF = document.getElementById('selected_food');

        // Event Listeners

        //Cover Image
        const coverContainers = document.getElementsByClassName("cover_container");

        for (let i = 0; i < coverContainers.length; i++) {
            const container = coverContainers[i];
            const Cloche = container.querySelector(".cover_plate");
      
            // Move the cover up on hover over the container
            container.addEventListener("mouseenter", () => {
                Cloche.style.transform = "translate(-50%, -100px)";
            });

            // Move the cover back when leaving the container or the button image
            container.addEventListener("mouseleave", () => {
                Cloche.style.transform = "translate(-50%, 0px)";
            });
        }

        

        //Carousel Detector 
        const carousel = document.getElementById('pasta_carousel');
        carousel.addEventListener('slid.bs.carousel', function (event) {
            console.log("Active slide index:", event.to);
            hideFood();
            hideDetails();
        });

        //Pasta
        const spaghetti_carbonara_btn = document.getElementById('spag_carb');
        spaghetti_carbonara_btn.addEventListener("click", () => {
            
            renderFood('food_detail', Spaghetti_Carbonara);
            showFood();
            
        });

        const aglio_olio_btn = document.getElementById('aglio');
        aglio_olio_btn.addEventListener("click", () => {
            renderFood('food_detail', Aglio_Olio);
            showFood();
           
        });

        const creamy_garlic_btn = document.getElementById('creamy');
        creamy_garlic_btn.addEventListener("click", () => {
            renderFood('food_detail', Creamy_Garlic);
            showFood();
        });

        //Eh
        const carioca_btn = document.getElementById('carioca');
        carioca_btn.addEventListener("click", ()=>{
            renderFood('food_detail', Carioca);
            showFood();
        });

        const palitaw_btn = document.getElementById('palitaw');
        palitaw_btn.addEventListener("click", () =>{
            renderFood('food_detail', Palitaw);
            showFood();
        });

        const fried_sweet_potato_btn = document.getElementById('sweet_potato');
        fried_sweet_potato_btn.addEventListener( "click", () =>{ 
            renderFood('food_detail', Fried_Sweet_Potato);
            showFood();
        });

        //Red Beans
        const sweet_red_bean_soup_btn = document.getElementById('sweet_rbs');
        sweet_red_bean_soup_btn.addEventListener( "click", () =>{ 
            renderFood('food_detail', Sweet_Red_Bean_Soup);
            showFood();
        });

        const sweet_red_bean_sandwich_btn = document.getElementById('sweet_rbsc');
        sweet_red_bean_sandwich_btn.addEventListener( "click", () =>{ 
            renderFood('food_detail', Red_Bean_Sandwich);
            showFood();
        });

        const mochi_btn = document.getElementById('mochi');
        mochi_btn.addEventListener( "click", () =>{ 
            renderFood('food_detail', Mochi);
            showFood();
        });


        function renderFood(foodID, food){
            const SF = document.getElementById(foodID);
            const title = SF.querySelector('h2');
            const food_image = document.getElementById('selected_food');
            const nIngredients = food.length;
            title.textContent = food[0];
            food_image.innerHTML = '<img id="selected_food" src="...">';
            food_image.src = food[0] + ".png";
            const Ingredients_Container = document.getElementById('ingredients_con');
            Ingredients_Container.innerHTML = "";

            const ul = document.createElement("ul");

            for (let i = 1; i <= nIngredients-1; i++) {
                const li = document.createElement("li");
                li.textContent = food[i];
                ul.appendChild(li);
            }
            Ingredients_Container.appendChild(ul);
        }
        
        function showFood(){
            const selected_food = document.getElementById('selected_food');
            const smoke = document.getElementById('smoke');
            selected_food.style.display = "";
            selected_food.offsetHeight; 
            selected_food.style.transform = "translate(-50%, -30px)";
            setTimeout( () => {
                image_SF.style.transform = "translate(-50%, 20px)";
                
               }, 500);
            setTimeout(() =>{
                smoke.style.display = "";
            smoke.offsetHeight; 
            }, 1000);
            
        }


        function hideFood(){
            const selected_food = document.getElementById('selected_food');
            const smoke = document.getElementById('smoke');
            selected_food.style.display = "none";
            smoke.style.display = "none";
        }

        function hideDetails(){
            const FT = document.getElementById('food_title');
            FT.textContent = "Pick A Food";

            const ingredients = document.getElementById('ingredients_con');
            ingredients.innerHTML = "";
        }
        
        

        //Me locations

        const x = [];
        const y = [];
        const z = [];

        // List of Foods

        // Pasta
        const Spaghetti_Carbonara = ["Spaghetti Carbonara", "Pasta", "Pork Fat", "Cheese", "Black Pepper and Salt"];
        const Creamy_Garlic = ["Creamy Garlic", "Pasta", "Garlic", "Cheese", "Nestle Cream", "Black Pepper and Salt"];
        const Aglio_Olio = ["Aglio Olio", "Pasta", "Garlic", "Cheese", "Red Pepper Flakes", "Parsley",  "Black Pepper and Salt"];

        //eh
        const Carioca = ["Carioca", "Glutinous Rice Flour", "Sugar", "Water", "Oil"];
        const Palitaw = ["Palitaw", "Glutinous Rice Flour", "Grated Coconut", "Sugar", "Roasted Sesame Seed", "Water"];
        const Fried_Sweet_Potato = ["Fried Sweet Potato", "Sweet Potato", "Sugar", "Oil"];

        //Red Beans
        const Sweet_Red_Bean_Soup = ["Sweet Red Bean Soup", "Red Beans", "Sugar", "Glutinous Rice Flour", "Water and Salt"];
        const Red_Bean_Sandwich = ["Sweet Red Bean Sandwich", "Sweet Red Bean Paste", "Slice of Cheese", "Bread"];
        const Mochi = ["Mochi", "Sweet Red Bean Paste", "Glutinous Rice Flour", "Cornstarch", "Water" ];