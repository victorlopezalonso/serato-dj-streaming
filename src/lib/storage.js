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
        return this.templates;
    }

    addTemplate(template)
    {
        const lastId = this.templates.reduce((prev, current) => (prev.id > current.id) ? prev.id : current.id, 0);
        
        this.templates = [
            ...this.templates,
            {...template, id: lastId + 1}
        ];

        return this.saveTemplates();
    }

    updateTemplate(template)
    {
        this.templates = this.templates.map(t => ({
            ...t,
            ...t.id === template.id && template
        }));
    
        return this.saveTemplates();
    }

    deleteTemplate(template)
    {
        this.templates = this.templates.filter(t => t.id !== template.id);
        
        return this.saveTemplates();
    }

    getUsername()
    {
        return this.get('username');
    }

    setUsername(username)
    {
        this.username = username;
        this.set('username', username);
    }

    getFilesLocation()
    {
        return this.get('filesLocation');
    }

    setFilesLocation(filesLocation)
    {
        this.filesLocation = filesLocation;
        this.set('filesLocation', filesLocation);
    }

    getExportInUppercase()
    {
        return this.get('exportInUppercase');
    }

    setExportInUppercase(exportInUppercase)
    {
        this.exportInUppercase = exportInUppercase;
        this.set('exportInUppercase', exportInUppercase);
    }

}

const schema = {
	templates: {
		"type": "array",
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