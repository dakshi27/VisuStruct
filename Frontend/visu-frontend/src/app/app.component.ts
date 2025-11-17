import { Component, OnInit } from '@angular/core';
import * as monaco from 'monaco-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  editor: monaco.editor.IStandaloneCodeEditor | undefined;

  ngOnInit() {
    this.editor = monaco.editor.create(document.getElementById('editor')!, {
      value: `// Write your C# linked list code here
class Node {
    public int Value;
    public Node Next;
    public Node(int value) {
        Value = value;
        Next = null;
    }
}`,
      language: 'csharp',
      theme: 'vs-dark',
      automaticLayout: true
    });
  }

  saveCode() {
    const code = this.editor?.getValue();
    console.log("Saved code:", code);
  }

  clearCode() {
    this.editor?.setValue("");
  }

  resetCode() {
    this.editor?.setValue(`// Write your C# linked list code here
class Node {
    public int Value;
    public Node Next;
    public Node(int value) {
        Value = value;
        Next = null;
    }
}`);
  }

  runCode() {
    const code = this.editor?.getValue();
    console.log("Code executed:", code);

    const randomValue = Math.floor(Math.random() * 100);
    this.renderNode(randomValue);
  }

  renderNode(value: number) {
  const div = document.createElement("div");
  div.innerText = value.toString();
  div.className = "bg-gray-100 text-gray-900 px-4 py-2 rounded-lg shadow-md border border-gray-300 font-semibold";
  document.getElementById("visualizer")?.appendChild(div);
}

toggleTheme() {
  const html = document.querySelector('html');
  if (html?.classList.contains('dark')) {
    html.classList.remove('dark');
  } else {
    html?.classList.add('dark');
  }
}

}
