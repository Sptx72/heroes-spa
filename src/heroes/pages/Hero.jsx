import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import getHeroById from "../helpers/getHeroById";


const Hero = () => {

    const { id, ...rest } = useParams();
    const hero = useMemo(() => getHeroById(id),[id]);

    if (!hero) {
        return <Navigate to="/marvel" />
    }

    const navigate = useNavigate();

    const onNavigateBack = () =>{
        navigate(-1)
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`/assets/heroes/${id}.jpg`} className="img-thumbnail animate__animated animate__fadeInLeft" alt={hero.superhero} />
            </div>
            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
                    <li className="list-group-item"><b>First appearance:</b> {hero.first_appearance}</li>
                </ul>
                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>
                <button 
                    className="btn btn-outline-primary"
                    onClick={onNavigateBack}
                >
                    Back
                </button>
            </div>
        </div>
    )
}

export default Hero