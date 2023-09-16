import { FileVideo, Github, Upload, Wand2 } from 'lucide-react'
import { Button } from "./components/ui/button";
import { Separator } from './components/ui/separator';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Slider } from './components/ui/slider';

export function App() {
  return (
    <div className="min-h-screen flex flex-col" >
      <header className="px-6 py-12 flex items-center justify-between border-b" >
        <h1 className="text-xl font-bold " >upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Desenvolvido com ❤ no NLW da Rocketseat</span>
          
          <Separator orientation="vertical" className="h-6" />
          <Button variant="outline" >
            <Github className="w-4 h-4 mr-2" />
              Github
            </Button>
        </div>
      </header>

      <main className="flex-1 p-6 flex gap-6" >
        <div className="flex flex-col flex-1 gap-4" >
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea 
              className="resize-none p-4 leading-relaxed"
              placeholder="Inclua o prompt para a IA..."
            />
            <Textarea 
              className="resize-none p-4 leading-relaxed"
              placeholder="Resultado gerado pela IA..." 
              readOnly 
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode utilizar a variável <code className="text-violet-400">{'transcription'}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado.
          </p>
        </div> 
        <aside className="w-80 space-y-6" >
          <form className="space-y-6">
            <label 
              htmlFor="video"
              className="border w-full flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-3 items-center justify-center hover:bg-primary/5"
            >
              <FileVideo className="w-4 h-4"/>
              Selecione um vídeo
            </label>

            <input type="file" id="video" accept='video/mp4' className="sr-only"/>

            <Separator/>

            <div className="space-y-2" >
              <Label htmlFor='transcription-prompt' >
                Prompt de transcrição
              </Label>

              <Textarea 
                id="transcription-prompt" 
                className="h-20 leading-relaxed resize-none"
                placeholder="Inclua palavras chave mencionadas no vídeo separadas por vírgula (,) "
              />  
            </div> 

            <Button type="submit" className="w-full" >
              Carregar vídeo 
              <Upload className="w-4 h-4 ml-2"/>
            </Button>
          </form>

          <Separator />

          <form className="space-y-6">
            <div className="space-y-2" >
              <label htmlFor="">Prompt</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title" >Título do Youtube</SelectItem>
                  <SelectItem value="description" >Descrição do Youtube</SelectItem>
                </SelectContent>
              </Select>
            </div>


            <div className="space-y-2" >
              <label htmlFor="">Modelo</label>
              <Select disabled defaultValue='gpt3.5'>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5" >GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground">
                Você poderá customizar essa opção em breve
              </span>
            </div>

            <Separator/>

            <div className="space-y-4" >
              <label htmlFor="">Temperatura</label>
              <Slider 
                min={0}
                max={1}
                step={0.1}
              />
              <span className="block text-xs text-muted-foreground leading-relaxed ">
                Valores mais altos tendem a deixar o resultado mais criativo e com possíveis errors
              </span>
            </div>

            <Separator />

            <Button type="submit" className="w-full" >
              Executar
              <Wand2 className="w-4 h-4 ml-2"/>
            </Button>

          </form>
        </aside>
      </main>
    </div>
  )
}
