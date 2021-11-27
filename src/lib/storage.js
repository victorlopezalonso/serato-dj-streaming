import Store from 'electron-store';

const titleFileName = 'title.txt';
const descriptionFileName = 'description.txt';
const tagsFileName = 'tags.txt';
const seratoNowPlayingFileName = 'serato-now-playing.txt';
const defaultIntervalTime = 30;

class Storage extends Store
{
    getTemplates()
    {
        return this.get('templates') || [];
    }

    saveTemplates(templates)
    {
        this.set('templates', templates);
        
        return this.getTemplates();
    }

    addTemplate(template)
    {
        const lastId = this.getTemplates().reduce((prev, current) => (prev.id > current.id) ? prev.id : current.id, 0);
        
        return this.saveTemplates([
            ...this.getTemplates(),
            {...template, id: lastId + 1}
        ]);
    }

    updateTemplate(template)
    {
        const templates = this.getTemplates().map(t => ({
            ...t,
            ...t.id === template.id && template
        }));
    
        return this.saveTemplates(templates);
    }

    deleteTemplate(template)
    {
        const templates = this.getTemplates().filter(t => t.id !== template.id);
        
        return this.saveTemplates(templates);
    }

    getSelectedTemplate()
    {
        const selectedTemplateId = this.get('selectedTemplateId');

        return selectedTemplateId && this.getTemplates().find(t => t.id === selectedTemplateId);
    }

    getSelectedTemplateTitle()
    {
        const template = this.getSelectedTemplate();
        
        return template?.title;
    }

    getSelectedTemplateDescription()
    {
        const template = this.getSelectedTemplate();
        
        return template?.description;
    }

    getSelectedTemplateTags()
    {
        const template = this.getSelectedTemplate();
        
        return template?.tags;
    }

    setSelectedTemplate(template)
    {
        this.set('selectedTemplateId', template.id);

        return this;
    }

    getUsername()
    {
        return this.get('username');
    }

    setUsername(username)
    {
        this.set('username', username);
    }

    getFilesLocation()
    {
        return this.get('filesLocation');
    }

    setFilesLocation(filesLocation)
    {
        this.set('filesLocation', filesLocation);
    }

    getExportInUppercase()
    {
        return this.get('exportInUppercase');
    }

    setExportInUppercase(exportInUppercase)
    {
        this.set('exportInUppercase', exportInUppercase);
    }

    getUserPlaylistUrl()
    {
        return `https://serato.com/playlists/${this.getUsername()}/live`;
    }

    setIntervalTime(intervalTime)
    {
        this.set('intervalTime', intervalTime);
    }

    getIntervalTimeInMilliseconds()
    {
        return (this.get('intervalTime') || defaultIntervalTime) * 1000;
    }

    getTitleFileLocation()
    {
        return this.getFilesLocation() + '/' + titleFileName;
    }

    getDescriptionFileLocation()
    {
        return this.getFilesLocation() + '/' + descriptionFileName;
    }

    getTagsFileLocation()
    {
        return this.getFilesLocation() + '/' + tagsFileName;
    }

    getSeratoNowPlayingFileLocation()
    {
        return this.getFilesLocation() + '/' + seratoNowPlayingFileName;
    }
}

const schema = {
    selectedTemplateId: {
        type: 'number'
    },
	templates: {
		type: 'array',
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
    lastExportedTrackname: {
		type: 'string',
    },
    intervalTime: {
		type: 'number',
    },
};

const storage = new Storage({ schema });

export default storage;