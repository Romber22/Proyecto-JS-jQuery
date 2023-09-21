$(document).ready(function () {

    // SLIDER
    $('.slider').bxSlider();

    // POSTS
    var posts = [
        {
            title: "De sangre y cenizas",
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: "Apasionante y con una acción trepidante, De sangre y ceniza es una fantasía sexy, adictiva e inesperada, perfecta para los seguidores de Sarah J. Maas y Laura Thalassa. Una Doncella… Elegida desde su nacimiento para dar comienzo a una nueva era, la vida de Poppy nunca le ha pertenecido. La vida de la Doncella es solitaria. Jamás la tocarán. Jamás la mirarán. Jamás le hablarán. Jamás sentirá placer. Mientras espera al día de su Ascensión, preferiría estar con los guardias luchando contra el mal que se llevó a su familia que preparándose para que los dioses la encuentren lo bastante digna. Pero la elección nunca ha sido suya. Un deber… El futuro del reino entero recae sobre los hombros de Poppy, algo que ni siquiera está demasiado segura de querer para ella. Porque una Doncella tiene corazón. Y alma. Y deseo. Y cuando Hawke, un guardia de ojos dorados que ha jurado asegurar su Ascensión, entra en su vida, el destino y el deber se entremezclan con el deseo y la necesidad. Él incita su ira, hace que se cuestione todo aquello en lo que cree y la tienta con lo prohibido. Un reino… Abandonado por los dioses y temido por los mortales, un reino caído está surgiendo de nuevo, decidido a recuperar lo que cree que es suyo mediante la violencia y la venganza. Y a medida que la sombra de los malditos se acerca, la línea entre lo prohibido y lo correcto se difumina. Poppy no solo está a punto de perder el corazón y ser considerada indigna por los dioses, sino que también está a punto de perder la vida cuando los ensangrentados hilos que mantienen unido su mundo empiezan a deshilacharse."
        },
        {
            title: "La reina Carlota",
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: "En 1761, en un soleado día de septiembre, un rey y una reina se conocieron por primera vez. Se casaron en cuestión de horas. La princesa alemana Carlota de Mecklemburgo-Strelitz era guapa y terca, y poseía una inteligencia feroz; unos atributos que no eran precisamente los que la corte británica buscaba para la esposa del rey Jorge III. Sin embargo, su ferocidad y su independencia eran justo lo que necesitaba, porque Jorge tenía secretos., unos secretos capaces de sacudir los cimientos de la monarquía. Sumergida de lleno en su nuevo papel como miembro de la familia real, Carlota debe aprender a moverse en la compleja política de la corte, al tiempo que protege su corazón, porque se está enamorando del rey, aunque él la aparta de su lado. Pero, sobre todo, debe aprender a regir y a comprender que le han otorgado el poder de rehacer la sociedad. Debe luchar: por ella, por su marido y por sus nuevos súbditos, que recurren a ella en busca de guía y de protección. Porque nunca volverá a ser Solo Carlota. Y debe cumplir con su destino. como reina."
        },
        {
            title: "La armadura de la luz",
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: "1792. Un gobierno tiránico está decidido a convertir Inglaterra en un poderoso imperio comercial. Mientras, Napoleón Bonaparte comienza su ambicioso ascenso al poder y, en medio de un gran descontento social, los vecinos de Francia se mantienen en máxima alerta."
        },
        {
            title: "Cuentos de hadas japoneses",
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: "La rica tradición del folclore japonés nos ha legado numerosas historias que aún perviven en el imaginario colectivo nipón y se han convertido en un modo ameno de descubrir una cultura fascinante. Con el telón de fondo de un pasado mítico, presentamos una colección de hermosos cuentos impregnados de la esencia del Japón mágico, un mundo en el que la fantasía, el exotismo y la imaginación son sus pilares fundamentales.Narrados a la luz de la lumbre de padres a hijos desde hace siglos, estos cuentos han llegado hasta nuestros días conservando intacta su belleza y su magia y atrapando la imaginación de generaciones de lectores, tanto de los más pequeños como de los adultos."
        },
        {
            title: "Desayuno con partículas",
            date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
            content: "Si decides aventurarte a navegar entre estas páginas, descubrirás un  universo tan maravilloso como desconcertante. La teoría cuántica es una  de las más bellas y asombrosas de la ciencia. Las reglas que sigue son  alocadas en comparación con nuestro día a día. Son antiintuitivas. Al  adentrarnos en el mundo cuántico se ponen en jaque nuestras creencias  sobre la realidad, y también las de nuestra realidad cotidiana. Sonia Fernández-Vidal, escritora y doctora en Física Cuántica, y  Francesc Miralles, escritor y periodista, nos invitan a un divertido  desayuno al que también asistirán Newton, Einstein, Heisenberg y otros  célebres físicos de la historia. Entre magdalenas, tostadas, café con  leche y zumos de naranja, emprenderemos un fascinante y revelador viaje  a los orígenes del universo y aprenderemos para qué sirve un acelerador  de partículas, qué es la partícula de Dios, cómo las cosas pueden estar  en dos sitios a la vez... e incluso trataremos de comprender los misterios de la existencia."
        }
    ];

    // console.log(posts);
    posts.forEach((item, index) => {
        var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="boton">Leer más</a>
                </article>
            `;
        $('#posts').append(post);
    });
});