from rest_framework.renderers import JSONRenderer
from rest_framework.utils.serializer_helpers import ReturnList
from uptime import boottime
from datetime import datetime


class CpfJSONRenderer(JSONRenderer):

    def render(self, data, accepted_media_type=None, renderer_context=None):
        if isinstance(data, ReturnList):
            new_data = []
            for item in data:
                new_data.append({'cpf': item})
            return super(CpfJSONRenderer, self).render(new_data, accepted_media_type, renderer_context)

        return super(CpfJSONRenderer, self).render(data, accepted_media_type, renderer_context)


class CpfStatusJSONRenderer(JSONRenderer):

    def render(self, data, accepted_media_type=None, renderer_context=None):
        if len(data):
            data = data[0]
            new_data = {}
            status = 'FREE' if data.get('blocked', None) == 0 else 'BLOCK'
            new_data['CPF'] = data.get('number', None)
            new_data['STATUS'] = status
        else:
            new_data = {'CPF': None, 'STATUS': None}
        return super(CpfStatusJSONRenderer, self).render(new_data, accepted_media_type, renderer_context)


class ServerStatusJSONRenderer(JSONRenderer):

    def render(self, data, accepted_media_type=None, renderer_context=None):
        blocklist_cpf_quantity = len(data[0].get('cpf', None))
        system_uptime = boottime()
        system_uptime = str(datetime.now() - system_uptime)
        cpf_query_quantity_since_last_uptime = len(data[1].get('apirequestlog', None))
        data = {'Uptime do sistema': system_uptime,
                'Quantidade de CPFs na blocklist': blocklist_cpf_quantity,
                'Quantidade de consultas desde o ultimo restart do servidor': cpf_query_quantity_since_last_uptime
                }

        return super(ServerStatusJSONRenderer, self).render(data, accepted_media_type, renderer_context)
