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

  runCode() {
    const code = this.editor?.getValue();
    console.log("Code executed:", code);

    // Simulate adding a node visually
    const randomValue = Math.floor(Math.random() * 100);
    this.renderNode(randomValue);
  }

  renderNode(value: number) {
    const div = document.createElement("div");
    div.innerText = value.toString();
    div.style.border = "1px solid black";
    div.style.borderRadius = "8px";
    div.style.padding = "10px";
    div.style.margin = "5px";
    div.style.backgroundColor = "#f0f0f0";
    div.style.fontWeight = "bold";
    div.style.minWidth = "40px";
    div.style.textAlign = "center";
    document.getElementById("visualizer")?.appendChild(div);
  }
}
