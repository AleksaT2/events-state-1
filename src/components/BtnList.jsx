export default function ProjectList({ projects }) {
    const projectItem = projects.map((item, index) => 
        <div key={index} className="itemProject">
            <img src={item.img} alt={item.category}></img>
        </div>
    );

    return (
        <div className="projectList">{projectItem}</div>
    );
}