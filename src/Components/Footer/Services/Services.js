import ServicesList from "./ServicesList/ServicesList";

const Services = () => {
    return (
        <section className="flex w-full">
            <div className="flex flex-wrap w-full bg-neutral-300 gap-x-px gap-y-px">
                <ServicesList />
            </div>
        </section>
    );
}
 
export default Services;