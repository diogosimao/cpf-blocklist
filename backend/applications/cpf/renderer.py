from rest_framework.renderers import JSONRenderer


class CpfJSONRenderer(JSONRenderer):

    def render(self, data, accepted_media_type=None, renderer_context=None):
        if len(data):
            data = data[0]
            status = 'FREE' if data.get('status', None) == 0 else 'BLOCK'
            data['CPF'] = data.get('number', None)
            data['STATUS'] = status
        else:
            data = {'CPF': None, 'STATUS': None}
        return super(CpfJSONRenderer, self).render(data, accepted_media_type, renderer_context)


class ServerStatusJSONRenderer(JSONRenderer):

    def render(self, data, accepted_media_type=None, renderer_context=None):
        blacklist_cpf_quantity = len(data[0].get('cpf', None))
        cpf_query_quantity_since_last_uptime = len(data[1].get('apirequestlog', None))
        data = {'Quantidade de CPFs na blacklist': blacklist_cpf_quantity,
                'Quantidade de consultas desde o ultimo restart do servidor': cpf_query_quantity_since_last_uptime
                }

        return super(ServerStatusJSONRenderer, self).render(data, accepted_media_type, renderer_context)
