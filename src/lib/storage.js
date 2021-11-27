import Store from 'electron-store';

class Storage extends Store
{
    constructor(props)
    {
        super(props);
        this.templates = this.get('templates') || [];
        this.username = this.get('username');
        this.filesLocation = this.get('filesLocation');
        this.exportInUppercase = this.get('exportInUppercase');
    }

    saveTemplates()
    {
        this.set('templates', this.templates);
        return this;
    }

    addTemplate(template)
    {
        this.templates = [...this.templates, template];
        this.saveTemplates();
    }

    updateTemplate(template)
    {
        this.templates = this.templates.map(t => ({
            ...t,
            ...t.id === template.id && {template}
        }));
        this.saveTemplates();
    }

    deleteTemplate(template)
    {
        this.templates = this.templates.filter(t => t.id !== template.id);
        this.saveTemplates();
    }
}

const schema = {
	templates: {
		"type": "array",
        "items": {
            "type": "object"
        }
	},
	username: {
		type: 'string',
	},
	filesLocation: {
		type: 'string',
	},
	exportInUppercase: {
		type: 'boolean',
	},
};

const storage = new Storage({schema});

export default storage;