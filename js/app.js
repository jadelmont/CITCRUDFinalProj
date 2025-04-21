$(document).ready(function () {
    const gemstones = getGemstones();

    const showActionMessage = function (message) {
        const actionMessage = $("#action-message");
        actionMessage.text(message).show();

        setTimeout(function () {
            actionMessage.hide();
        }, 3000);
    };

    const renderGallery = function () {
        const gallery = $("#gemstone-list");
        gallery.html("");

        for (let i = 0; i < gemstones.length; i++) {
            const gemstone = gemstones[i];

            const card = document.createElement("div");
            card.className = "card";
            card.dataset.index = i;

            const image = document.createElement("img");
            image.src = gemstone.image;
            image.alt = gemstone.name;

            const name = document.createElement("h3");
            name.textContent = gemstone.name;

            const description = document.createElement("p");
            description.textContent = gemstone.description;

            const viewDetailsBtn = document.createElement("button");
            viewDetailsBtn.textContent = "View Details";
            viewDetailsBtn.className = "view-details-btn";
            viewDetailsBtn.dataset.index = i;

            const updateBtn = document.createElement("button");
            updateBtn.textContent = "Update";
            updateBtn.className = "update-btn";
            updateBtn.dataset.index = i;

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.className = "delete-btn";
            deleteBtn.dataset.index = i;

            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(description);
            card.appendChild(viewDetailsBtn);
            card.appendChild(updateBtn);
            card.appendChild(deleteBtn);

            gallery[0].appendChild(card);
        }
    };

    const renderDetails = function (gemstone) {
        document.querySelector("#details-image").src = gemstone.image;

        $("#details-name").text(gemstone.name);
        $("#details-color").text(gemstone.color);
        $("#details-hardness").text(gemstone.hardness);
        $("#details-description").text(gemstone.description);

        let factsList = "";
        for (let i = 0; i < gemstone.facts.length; i++) {
            factsList += "<li>" + gemstone.facts[i] + "</li>";
        }
        $("#details-facts").html("<ul>" + factsList + "</ul>");

        $("#gemstone-details").show();
    };

    function manualTrim(str) {
        let start = 0;
        let end = str.length - 1;

        while (start <= end && str[start] === " ") {
            start++;
        }
        while (end >= start && str[end] === " ") {
            end--;
        }
        return str.slice(start, end + 1);
    }

    $("#gemstone-form").on("submit", function () {
        const editingIndex = $("#editing-index").val();
        const name = $("#name").val();
        const color = $("#color").val();
        const hardness = $("#hardness").val();
        const description = $("#description").val();
        const factsText = $("#facts").val();
        let image = $("#image").val();

        
        if (image === "") {
            image = "assets/default.jpg";
        }

        const factsArray = factsText.split(",");
        const facts = [];
        for (let i = 0; i < factsArray.length; i++) {
            if (factsArray[i]) {
                facts.push(manualTrim(factsArray[i]));
            }
        }

        if (editingIndex !== "") {
            gemstones[editingIndex] = { name, color, hardness, description, image, facts };
            $("#editing-index").val("");
            showActionMessage("Gemstone successfully updated!");
            $("#gemstone-form button[type='submit']").text("Save Gemstone");
        } else {
            gemstones.push({ name, color, hardness, description, image, facts });
            showActionMessage("Gemstone successfully saved!");
        }

        renderGallery();
        $("#gemstone-form")[0].reset();
        return false;
    });

    $("#gemstone-list").on("click", ".delete-btn", function () {
        const index = $(this).data("index");
        gemstones.splice(index, 1);
        renderGallery();
        showActionMessage("Gemstone successfully deleted!");
    });

    $("#gemstone-list").on("click", ".update-btn", function () {
        const index = $(this).data("index");
        const gemstone = gemstones[index];

        $("#name").val(gemstone.name);
        $("#color").val(gemstone.color);
        $("#hardness").val(gemstone.hardness);
        $("#description").val(gemstone.description);
        $("#image").val(gemstone.image);
        $("#facts").val(gemstone.facts.join(","));

        $("#editing-index").val(index);
        $("#gemstone-form button[type='submit']").text("Update Gemstone");
    });

    $("#gemstone-list").on("click", ".view-details-btn", function () {
        const index = $(this).data("index");
        const gemstone = gemstones[index];
        renderDetails(gemstone);
    });

    $("#gemstone-details").on("click", "#close-details", function () {
        $("#gemstone-details").hide();
    });

    renderGallery();
});