import architectureImage from "../../../../assets/project_imgs/popTech.png";

function PopTechContent() {
    return (
        <img
            src={architectureImage}
            alt="Architecture"
            style={{
                width: "100%",
                height: "100%",
                objectFit: "contain"
            }}
        />
    );
}

export default PopTechContent;