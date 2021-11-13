const Post = require('../model/PostModel')
const PostModel = require('../model/PostModel')

class Posts {
    constructor(initials, description) {
        this.initials = initials
        this.description = description        
    }

    show_result() {
        console.log(this.initials + ' ' + this.description)
    }

    async create_post (object) {
        await PostModel.create({
            initials: object.initials,
            description: object.description
        }).then(post => console.log(post))
    }

    async list_posts () {
        const posts = await PostModel.findAll()
        console.log(posts)
    }
}

// new Posts('CEL', 'Coronel').create_post
// new Posts('T CEL', 'Tenente Coronel').create_post
// new Posts('MAJ', 'Major').create_post
// new Posts('CAP', 'Capitão').create_post
// new Posts('TEN', 'Tenente').create_post
// new Posts('ASP', 'Aspirante').create_post
// new Posts('S TEN', 'Sub-Tenente').create_post
// new Posts('SGT', 'Sargento').create_post
// new Posts('CB', 'Cabo').create_post
// new Posts('SD', 'Soldado').create_post
// new Posts('XX', 'Outros').create_post




